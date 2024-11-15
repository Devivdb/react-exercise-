import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import initialStock from "./helpers/calculateInitialStock.js";
import soldProducts from "./helpers/calculateSoldProducts.js";
import productsLeftToSell from "./helpers/calculateProductsToSell.js";
import getTvInfo from "./helpers/getInfoTv.js"
import getScreenSize from "./helpers/getScreenSize.js";
import getPrice from "./helpers/getPrice.js";
import sourceImg from "./helpers/sourceImg.js";
import check from "./assets/check.png"
import minus from "./assets/minus.png"



function App() {

    function sortBestSelling() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        })
        console.log(inventory)
    }

    function sortCheapProduct() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        })
        console.log(inventory)
    }

    function sortHighRefrehRate() {
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        })
        console.log(inventory)
    }


  return (
      <main className="page-container">
          <h1>Tech it easy dashboard</h1>
          <section>
              <h2>Verkoopoverzicht</h2>
              <div className="dashboard-container">
                  <article className="dashboard-item items-sold">
                      <h3>Aantal verkochte producten</h3>
                      <h2>{soldProducts(inventory)}</h2>
                  </article>
                  <article className="dashboard-item items-original">
                      <h3>Aantal ingekochte producten</h3>
                      <h2>{initialStock(inventory)}</h2>
                  </article>
                  <article className="dashboard-item items-to-sell">
                      <h3>Aantal te verkopen producten</h3>
                      <h2>{productsLeftToSell(inventory)}</h2>
                  </article>
              </div>
          </section>
          <section>
              <h2>Best verkochten tv</h2>
              <div className="product product-best-seller">
                  <img src={sourceImg(bestSellingTv)} alt="Samsung Tv" className="product-image"/>
                  <article>
                      <h3>{getTvInfo(bestSellingTv)}</h3>
                      <p className="product-price">{getPrice(bestSellingTv.price)}</p>
                      <p>{getScreenSize(bestSellingTv)}</p>
                      <p className="options">
                          <ul className="option-list">
                              <li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                              <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                              <li><img src={check} alt="Icoon: aanwezig" className="icon"/>hdr</li>
                              <li><img src={check} alt="Icoon: aanwezig" className="icon"/>bluetooth</li>
                              <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>
                          </ul>
                      </p>
                  </article>
              </div>
          </section>
          <section>
              <h2>Alle tvs</h2>
              <div className="button-wrapper">
                  <button type="button" onClick={sortBestSelling}>Meest verkocht eerst</button>
                  <button type="button" onClick={sortCheapProduct}>Goedkoopste eerst</button>
                  <button type="button" onClick={sortHighRefrehRate}>Meest geschikt voor sport eerst</button>
              </div>
              {inventory.map((tv) => {
                  return (
                      <article className="product" key={tv.type}>
                          <span>
                              <img src={tv.sourceImg} alt="Product image" className="product-image"/>
                          </span>
                          <div className="product-info">
                              <h3>{getTvInfo(tv)}</h3>
                              <p className="product-price">{getPrice(tv.price)}</p>
                              <p>{getScreenSize(tv.availableSizes)}</p>
                              <ul className="option-list">
                                  {tv.options.map((option) => {
                                      if (option.applicable === true) {
                                          return <li key={`${tv.type}-${option.name}`}><img src={check} alt="Aanwezig" className={"icon"}/>{option.name}</li>
                                      } else {
                                          return <li key={`${tv.type}-${option.name}`}><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>{option.name}</li>
                                  }
                                  })}
                              </ul>
                          </div>
                      </article>
                  )})}
          </section>
      </main>
  )
}

export default App
