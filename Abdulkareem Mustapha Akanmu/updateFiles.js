const fs = require('fs');
const path = require('path');

// The directories to process
const directories = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7'];

// The details to prepend
const details = `/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */
`;

function processFile(filePath) {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Split the content by lines
    const lines = fileContent.split('\n');

    // Prepend the details and add a new line after it
    const newContent = `${details}\n${lines.join('\n')}`;

    // Write the new content back to the file
    fs.writeFileSync(filePath, newContent, 'utf-8');
}

function processDirectory(directory) {
    // Get all files in the directory
    const files = fs.readdirSync(directory);

    // Iterate through each file
    files.forEach(file => {
        const filePath = path.join(directory, file);

        // Check if the file is a TypeScript file
        if (fs.lstatSync(filePath).isFile() && filePath.endsWith('.ts')) {
            processFile(filePath);
        }
    });
}

// Process each specified directory
directories.forEach(directory => {
    const dirPath = path.join(__dirname, directory);
    if (fs.existsSync(dirPath)) {
        processDirectory(dirPath);
    } else {
        console.log(`Directory not found: ${directory}`);
    }
});

console.log('Files updated successfully.');
