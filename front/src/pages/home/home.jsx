import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import ItemStore from "../../components/itemStore/itemStore";
import Links from "./links/links";
import FiltroPreco from "./filtros/preco";
import FilterSize from "./filtros/size";
import FilterColor from "./filtros/color";
import Loading from "../../components/loading/loading";
import css from './home.module.css'
import axios from "../../api/axios";

const Home = () => {
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);
    const [priceVis, setPriceVis] = useState(false);

    const [size, setSize] = useState('');
    const [sizeVis, setSizeVis] = useState(false);

    const [color, setColor] = useState('');
    const [colorVis, setColorVis] = useState(false);

    const [itens, setItens] = useState([]);

    const [contFav, setContFav] = useState(0);
    const [contCart, setContCart] = useState(0);
    const [contPerf, setContPerf] = useState(0);
    // -------- //
    const setFilters = (itens) => {
        let filtered = sizeVis ? itens.filter((item) => item.size === size)   : [ ...itens ];
        filtered = colorVis ? filtered.filter((item) => item.color === color) : [ ...filtered ];
        return filtered;
    }

    const fetchItens = useCallback(async () => {
        const result = await axios.get('/getItens');
        const itens = result?.data;
        const filtered = await setFilters(itens);
        return setItens(filtered);
    }, [setFilters, setItens]);

    const fetchConts = useCallback(async () => {
        const result = await axios.get('/profile', {
            headers: {
                authorization: document.cookie,
            }
        });
        if(result.data) {
            setContFav(10);
            setContCart(3);
            setContPerf(result.data.id | 0);
            console.log(result.data.id)
        }
    }, []);

    useEffect(() => {
        fetchItens();
        fetchConts();
    }, [fetchItens, fetchConts])

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

    const handleFilter = () => {
        fetchItens();
    }

    return(
        <div>
            <NavBar 
                title={<h2>LOGO</h2>} 
                contFav={contFav}
                onClickFav={handleClickFav} 
                contCart={contCart}
                onClickCart={handleClickCart} 
                contPerf={contPerf}
                onClickPerf={handleClickPerf} 
            />
            
            {/* ------ LINKS ------ */}
            <Links links={[
                {label: 'Camisas',      link: 'camisas'   }, 
                {label: 'Calças',       link: 'calca'     }, 
                {label: 'Acessórios',   link: 'acessorios'}, 
                {label: 'Sapatos',      link: 'sapatos'   }, 
                {label: 'Diversos',     link: 'diversos'  },
            ]}/>

            {/* ------ FILTRO E ITENS ------ */}
            <div style={{
                display: 'flex',
            }}>
                {/* ------ FILTRO ------ */}
                <div style={{
                    width: '20%',
                    borderRight: '1px solid #DDD',
                }}>
                    <input className={css.filter} type="button" onClick={() => setPriceVis(!priceVis)} value={`Preço ${priceVis ? '-' : '+'}`} />
                        <FiltroPreco 
                            priceMin={priceMin}
                            setPriceMin={setPriceMin}
                            priceMax={priceMax}
                            setPriceMax={setPriceMax}
                            visible={priceVis}
                        />
                    <hr />
                    <input className={css.filter} type="button" onClick={() => setSizeVis(!sizeVis)} value={`Tamanho ${sizeVis ? '-' : '+'}`} />
                        <FilterSize 
                            setSize={setSize}
                            visible={sizeVis}
                        />
                    <hr />
                    <input className={css.filter} type="button" onClick={() => setColorVis(!colorVis)} value={`Cor ${colorVis ? '-' : '+'}`} />
                        <FilterColor
                            setColor={setColor}
                            visible={colorVis}
                        />
                    <hr />
                    <input
                        id={'btnFiltrar'}
                        type={'button'}
                        value={'Filtrar'}
                        onClick={() => handleFilter()}
                        className={css.filterButton}
                    />
                </div>
                {/* ------ ITENS ------ */}
                <div style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                    {itens.length > 0 ?
                        <div style={{
                            width: '90%',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr',
                            gap: '30px',
                            justifySelf: 'space-around'
                        }}>
                            {itens.map((item, index) => (
                                <ItemStore 
                                    key={index}
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    valor={item.price}
                                    onclick={handleClickItem}
                                />
                            ))}
                        </div> : <Loading />
                    }
                </div> 
            </div>
        </div>
    )
}

export default Home;