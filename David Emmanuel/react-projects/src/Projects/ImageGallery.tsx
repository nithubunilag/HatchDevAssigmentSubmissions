import { useState } from "react"

const imageUrls: string[] = [
    "https://unilag.edu.ng/wp-content/uploads/bedf91ff-2c6d-46c1-bc53-ecf5aa552c37.jpg",
    "https://images.freeimages.com/images/large-previews/355/poppies-2-1334190.jpg",
    "https://images.freeimages.com/images/large-previews/321/water-drop-1386547.jpg",
    "https://media.istockphoto.com/id/1518854805/photo/black-male-developer-thinking-and-typing-on-computer-surrounded-by-big-screens-showing-coding.webp?b=1&s=612x612&w=0&k=20&c=CYtTuDboE6-J7JFXMsZTnhPi1WQ23A9-qt30xioUtBk=",
    "https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg",
    "https://unilagsun.com.ng/wp-content/uploads/2023/08/DSC_0225-scaled-1-1024x680.jpg",
    "https://media.licdn.com/dms/image/D4D03AQGzxgmHnhpAoA/profile-displayphoto-shrink_200_200/0/1701282817495?e=2147483647&v=beta&t=IElJG_MWagDHPdXa4iw92aMu-9PVteWwHl19V1EBIAg",
    "https://etimg.etb2bimg.com/photo/99096605.cms",
    "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg",
]

export default function ImageGallery() {
    const [activeImage, setActiveImage] = useState<string | null>(null)

    return <div className='project' style={{ marginTop: '2rem' }}>
        <div className='gallery'>
            {imageUrls.map((image, i) => (
                <img key={i} className='thumbnail' src={image} onClick={() => setActiveImage(image)} />
            ))}
        </div>
        {activeImage && <ImageModal src={activeImage} hide={() => setActiveImage(null)} />}
    </div>
}

function ImageModal({ src, hide }: {
    src: string
    hide: () => void
}) {
    return <div className='modal' onClick={hide}>
        <img src={src} style={{ height: '75vh', borderRadius: '2vh', boxShadow: '0 0 2.5px white' }} />
    </div>
}
