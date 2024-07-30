
const Room = ({ room }) => {
    const path = 'http://localhost:4000'

    return (
        <div>
            <img src={path + room.room_image} alt={room.room_title} />
            <h4>{room.room_title}</h4>
            <p>{room.bedroom_count} double bed</p>
        </div>
    );
}

export default Room;