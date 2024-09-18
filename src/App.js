import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Page/Dashboard/Dashboard';
import MediaSettings from './Page/Media/MediaSetting/MediaSettings';
import ManageMedia from './Page/Media/ManageMedia/ManageMedia';
import ProductUnit from './Page/Catalog/ProductUnit/ProductUnit';
import ProductAttribute from './Page/Catalog/ProductAttributes/ProductAttributes';
import ProductVariations from './Page/Catalog/ProductVariation/ProductVariations';
import ProductBrand from './Page/Catalog/ProductBrand/ProductBrand';
import ProductCategory from './Page/Catalog/ProductCategory/ProductCategory';
import AddProduct from './Page/Catalog/AddProduct/AddProduct';
import ListProduct from './Page/Catalog/ListProduct/ListProduct';
import ProductReview from './Page/Catalog/ProductReview/ProductReview';
import ListStock from './Page/Stock/ListStock';
import AddStocks from './Page/Stock/AddStock/AddStocks';
import ListStocktransfer from './Page/Stock/ListStocktransfer';
import AddStockTransfer from './Page/Stock/AddStockTransfer/AddStockTransfer';
import ListPurchaseQuotation from './Page/Quotations/ListPurchaseQuotation';
import AddPurchaseQuotation from './Page/Quotations/AddPurchaseQuotation';
import ListSaleQuotation from './Page/Quotations/ListsaleQuotation';
import AddSaleQuotation from './Page/Quotations/AddSaleQuotation';
import ListPurchase from './Page/Purchase/ListPurchase';
import AddPurchase from './Page/Purchase/AddPurchase';
import Orders from './Page/Sell/Order/Orders';
import AddSale from './Page/Sell/Order/AddSale';
import AddSaleReturn from './Page/Return/AddSaleReturn/AddSaleReturn';
import AddReturnPurchase from './Page/Return/AddReturnPurchase/AddReturnPurchase';
import ListAccount from './Page/Account/ListAccount/ListAccount';
import LedgerReport from './Page/Account/LedgerReport/LedgerReport';
import AccountAdjustment from './Page/Account/AccountAdjustments/AccountAdjustment';
import Payment from './Page/Account/Payment/Payment';
import Receipt from './Page/Account/Receipt/Receipt';
import Expense from './Page/Account/Expense/Expense';
import Roles from './Page/People/Roles/Roles';
import RolesAdd from './Page/People/Roles/RolesAdd';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={Dashboard} />
      <Route path='/dasboard' Component={Dashboard} />
      <Route path='/admin-panel/media-settings' Component={MediaSettings} />
      <Route path='/admin-panel/manage-media' Component={ManageMedia} />
      <Route path='/admin-panel/product-units' Component={ProductUnit} />
      <Route path='/admin-panel/product-attributes' Component={ProductAttribute} />
      <Route path='/admin-panel/product-variation' Component={ProductVariations} />
      <Route path='/admin-panel/product-brand' Component={ProductBrand} />
      <Route path='/admin-panel/product-category' Component={ProductCategory} />
      <Route path='/admin-panel/add-product' Component={AddProduct} />
      <Route path='/admin-panel/product-list' Component={ListProduct} />
      <Route path='/admin-panel/product-review' Component={ProductReview} />
      <Route path='/admin-panel/list-stock' Component={ListStock} />
      <Route path='/admin-panel/add-stock' Component={AddStocks} />
      <Route path='/admin-panel/list-stock-transfer' Component={ListStocktransfer} />
      <Route path='/admin-panel/add-stock-transfer' Component={AddStockTransfer} />
      <Route path='/admin-panel/list-purchase-quotation' Component={ListPurchaseQuotation} />
      <Route path='/admin-panel/list-sale-quotation' Component={ListSaleQuotation} />
      <Route path='/admin-panel/add-purchase-quotation' Component={AddPurchaseQuotation} />
      <Route path='/admin-panel/add-sale-quotation' Component={AddSaleQuotation} />
      <Route path='/admin-panel/list-purchase' Component={ListPurchase} />
      <Route path='/admin-panel/add-purchase' Component={AddPurchase} />
      <Route path='/admin-panel/order' Component={Orders} />
      <Route path='/admin-panel/add-sale' Component={AddSale} />
      <Route path='/admin-panel/sale-return' Component={AddSaleReturn} />
      <Route path='/admin-panel/purchase-return' Component={AddReturnPurchase} />
      <Route path='/admin-panel/list-account' Component={ListAccount} />
      <Route path='/admin-panel/ledger-report' Component={LedgerReport} />
      <Route path='/admin-panel/asset-adjustments' Component={AccountAdjustment} />
      <Route path='/admin-panel/payment' Component={Payment} />
      <Route path='/admin-panel/receipts' Component={Receipt} />
      <Route path='/admin-panel/expense' Component={Expense} />
      <Route path='/admin-panel/role' Component={Roles} />
      <Route path='/admin-panel/roles/add' Component={RolesAdd} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
