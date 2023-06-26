import MainPageTemplate from "../../shared/templates/pages/MainPageTemplate"
import Header from "../../widgets/Header"
import Body from "./elements/Body"



const MainPage = () => {

    return <>
        <div style={{display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column'}}>
            <Header />
            <MainPageTemplate>

                <Body />

            </MainPageTemplate>
        </div>

    </>

}

export default MainPage