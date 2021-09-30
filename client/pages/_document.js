import Document,{Head,Main,NextScript,Html}  from "next/document";



class MyDocument extends Document {
    static async getInitialProps(ctx){
          const initialProps = await Document.getInitialProps(ctx);
          return {...initialProps}
    }

    render(){
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&family=Work+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument