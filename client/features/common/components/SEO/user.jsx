import Head from "next/head";


const SEO = ({data:{userName,profileImg,job,bio}})=>{
    console.log(userName)
       return(
           <Head>
            <title>{userName}</title>
           <meta charSet="UTF-8"/>
           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="author" content={userName}/>
           <meta name="description" content={bio}/>
           <meta name="robots" content="index, follow" />
           <meta name="og:type" content="website"/>
           <meta name="og:title" content={userName}/>
           <meta name="og:url" content=""/>
           <meta name="og:image" content={profileImg}/>
           <meta name="og:image:alt" content={`${userName} profile img`}/>
           <meta name="og:site_name" content="local freelancers"/>
           <meta name="og:description" content={bio}/>
           <meta name="twitter:card" content="summary"/>
           <meta name="twitter:type" content="website"/>
           <meta name="twitter:title" content={job}/>
           <meta name="twitter:url" content=""/>
           <meta name="twitter:image" content={profileImg}/>
           <meta name="twitter:image:alt" content={`${userName} profile img`}/>
           </Head>
       )
}

export default SEO