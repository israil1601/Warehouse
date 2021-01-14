import { FixedSizeGrid } from "react-window";
import Product from "./Product";
import AutoSizer from "react-virtualized-auto-sizer";

const ProductContainer = ({ currentProducts }) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeGrid
          columnCount={3}
          columnWidth={440}
          rowCount={currentProducts.length}
          rowHeight={290}
          width={width}
          height={height}
          itemData={currentProducts}
        >
          {({ style, data, rowIndex, columnIndex }) => (
            <div style={{ ...style, padding: "1vw", marginLeft: "5vw" }}>
              <Product product={data[rowIndex * 3 + columnIndex]} />
            </div>
          )}
        </FixedSizeGrid>
      )}
    </AutoSizer>
  );
};

export default ProductContainer;
