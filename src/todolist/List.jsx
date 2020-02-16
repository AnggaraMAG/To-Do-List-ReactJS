import React from 'react'


const List = (wakwaw) => {
    return (
        <ul>
            {/* untuk looping ketika add todo list */}
            {
                wakwaw.ucok.map((item, index) =>
                    <li key={index}>{item}</li>)
            }

        </ul>
    )
}
export default List;
