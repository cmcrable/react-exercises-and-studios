export default function HobbyLinks() {
    let hobbyLinks = ["https://www.playstation.com/en-us/", "https://finescale.com/how-to/2023/05/a-beginners-guide-to-building-plastic-model-cars"];
    return (
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>Playstation Console Gaming</a>
            <br></br>
            <a href = {hobbyLinks[1]}>Model Car Building</a>
        </div>
    )
}