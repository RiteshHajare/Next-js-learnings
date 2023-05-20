
function category({articles,category}) {
  return (
    <div>category {category} 
    
    {articles.map((article)=>{
        return(
            <div key={article.id}>
            <h2>{article.id} {article.title} </h2>
            {article.description}
            </div>
        )
    })}
    
    </div>
  )
}

export default category

export async function getServerSideProps(context){
    // console.log(context);
    const{params,req,res} = context
    res.setHeader('Set-Cookie',['name=Ritesh'])
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    // console.log("this first'''''''''''", res);
    const data = await response.json();
    // console.log("this second'''''''''",data);
    return{
        props:{
            articles:data,
            category
        }
    }
}