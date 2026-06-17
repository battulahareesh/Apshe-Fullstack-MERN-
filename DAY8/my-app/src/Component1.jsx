function Profile() {

    const items= ["idli", "Dosa", "vada"]

    return (
        <div>
            <ul>
                {items.map((item)=> {
                   return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Profile;
