
const project = ({manish}) => {
  return (
    <div>
        <h1>PROJECTS</h1>
        <br/>
        <br/>
        {manish.map((el)=>(
            <div key={el.id}>
                <h4>{el.full_name}</h4>
                <h4>{el.language}</h4>
            </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {

   try {
    const data = await fetch(`https://api.github.com/search/repositories?q=user:Manishvsonawane+fork:true&sort=update&per_page=10&type=Repositories`)
    const response = await data.json();
    console.log(response);
    return {
        props:{manish:response.item},
    }
   } catch (error) {
    console.log(error);
   }
}
export default project; 