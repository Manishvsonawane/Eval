import React from 'react'

const projects = ({projects}) => {
  return (
    <div>
        {projects.map((el,inx)=>(
            <div key={el.id}>
                <p>{el.full_name}</p>
                <p>{el.language}</p>
                <p>{el.stargaxers_count}</p>
                <p>{el.watchers_count}</p>
                <p>{el.visibility}</p>
            </div>
        ))}
    </div>
  )
}

export async function staticp() {
    const data = await fetch(`https://api.github.com/search/repositories?q=user:Manishvsonawane+fork:true&sort=update&per_page=10&type=Repositories`)
    const response = await data.json();

    return {
        props:{
            projects:response.items,
        },
    }
}
export default projects; 