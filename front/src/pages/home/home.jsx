import React from "react";
import NavBar from "../../components/navbar";
import ItemStore from "../../components/itemStore/itemStore";
import Links from "./links/links";

const Home = () => {
    const handleClickFav = () => {
        console.log('favoritos');
    }
    const handleClickCart = () => {
        console.log('Carrinho');
    }
    const handleClickPerf = () => {
        console.log('Perfil');
    }
    const handleClickItem = (id) => {
        console.log('Clicou no item', id)
    }

    return(
        <div>
            <NavBar 
                title={'Logo'} 
                contFav={'2'} 
                contCart={'5'} 
                contPerf={'0'} 
                onClickFav={handleClickFav} 
                onClickCart={handleClickCart} 
                onClickPerf={handleClickPerf} 
            />
            
            {/* ------ LINKS ------ */}
            <Links links={['Camisas', 'Calças', 'Acessórios', 'Sapatos', 'Diversos']} />

            {/* ------ FILTRO E ITENS ------ */}
            <div style={{
                display: 'flex',
            }}>
                {/* ------ FILTRO ------ */}
                <div style={{
                    width: '20%',
                    overflowY: 'scroll'
                }}>
                    <h1>Filtro</h1>
                    <p>Preço</p>
                    <p>tamanho</p>
                    <p>cor</p>
                    <p>Genero</p>
                    <p>sei la</p>
                </div>
                {/* ------ ITENS ------ */}
                <div style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                    <div style={{
                        width: '90%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        gap: '30px',
                        justifySelf: 'space-around'
                    }}>
                        <ItemStore 
                            key={1}
                            id={1}
                            img={'1'}
                            title={'Camisa'}
                            desc={'Camisa masculina slim cinza'}
                            valor={'20,00'}
                            onclick={handleClickItem}
                        />
                        <ItemStore 
                            key={2}
                            id={2}
                            img={'2'}
                            title={'Relógio'}
                            desc={'Relógio de pulso digital rosa'}
                            valor={'34,00'}
                            onclick={handleClickItem}
                        />
                        <ItemStore 
                            key={3}
                            id={3}
                            img={'teste'}
                            title={'Item 3'}
                            desc={'Item para testes'}
                            valor={'10,50'}
                            onclick={handleClickItem}
                        />
                        <ItemStore 
                            key={4}
                            id={4}
                            img={'teste'}
                            title={'Item 4'}
                            desc={'Item para testes'}
                            valor={'20,90'}
                            onclick={handleClickItem}
                        />
                        <ItemStore 
                            key={5}
                            id={5}
                            img={'teste'}
                            title={'Item 5'}
                            desc={'Item para testes'}
                            valor={'25,00'}
                            onclick={handleClickItem}
                        />
                        <ItemStore 
                            key={6}
                            id={6}
                            img={'teste'}
                            title={'Item 6'}
                            desc={'Item para testes'}
                            valor={'200,00'}
                            onclick={handleClickItem}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;