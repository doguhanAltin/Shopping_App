import React from 'react'
import styles from  "./index.module.css"
function Profile() {
    return (
        <div className={styles.container}>
            <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" className ={styles.profilePic}/>
            <h2>Unknown User </h2>
        </div>
    )
}

export default Profile
