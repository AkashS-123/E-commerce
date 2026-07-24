import { CheckCircle2, XCircle, Clock, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProductCard } from "../types/product";
// import ProductGlyph from "./ProductGlyph";

interface ProductCardTileProps {
  product: ProductCard;
  compact?: boolean;
  interactive?: boolean;
  linkTo?: string;
  image?: string;
}

export default function ProductCardTile({
  product,
  compact = false,
  interactive = false,
  linkTo,
}: ProductCardTileProps) {
  const status =
    product.stockStatus ?? (product.inStock === false ? "out-of-stock" : product.inStock ? "in-stock" : undefined);

  const image = (
    <div className="relative flex aspect-square items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800/60">
      {product.badge && (
        <span
          className={
            "absolute left-2 top-2 rounded-md px-2 py-1 text-[10px] font-bold uppercase leading-tight text-white " +
            (product.badge.tone === "save" ? "bg-brand-500" : "bg-gray-900 dark:bg-gray-700")
          }
        >
          {product.badge.label}
          {product.badge.sublabel && <span className="block">{product.badge.sublabel}</span>}
        </span>
      )}
      {status === "out-of-stock" && (
        <span className="absolute left-2 top-2 rounded-md bg-gray-500 px-2 py-1 text-[10px] font-bold uppercase leading-tight text-white">
          Out of stock
        </span>
      )}
      {interactive && (
        <div className="absolute right-2 top-2 flex flex-col gap-1.5 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={(e) => e.preventDefault()}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:text-rose-500 dark:bg-gray-900 dark:text-gray-300"
          >
            <Heart size={13} />
          </button>
          <button
            type="button"
            aria-label="Quick view"
            onClick={(e) => e.preventDefault()}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:text-brand-600 dark:bg-gray-900 dark:text-gray-300"
          >
            <Eye size={13} />
          </button>
        </div>
      )}
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className={compact ? "h-full w-full object-contain p-4" : "h-full w-full object-contain p-4"}
        />
      ) : null}
    </div>
  );

  return (
    <div className="group">
      {linkTo ? <Link to={linkTo}>{image}</Link> : image}

      <div className="mt-3">
        {product.reviewCount && (
          <p className="text-xs text-gray-400 dark:text-gray-500">({product.reviewCount})</p>
        )}
        {linkTo ? (
          <Link
            to={linkTo}
            className={
              "mt-1 block font-semibold text-gray-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-400 " +
              (compact ? "text-xs" : "text-sm")
            }
          >
            {product.name}
          </Link>
        ) : (
          <p
            className={
              "mt-1 font-semibold text-gray-900 dark:text-white " + (compact ? "text-xs" : "text-sm")
            }
          >
            {product.name}
          </p>
        )}

        <p className="mt-1.5 flex items-center gap-2">
          {product.priceRange ? (
            <span className="text-sm font-extrabold text-red-500">
              ${product.priceRange[0].toFixed(2)} - ${product.priceRange[1].toFixed(2)}
            </span>
          ) : (
            <>
              <span className="text-sm font-extrabold text-red-500">
                ${(product.price ?? 0).toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through dark:text-gray-500">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </>
          )}
        </p>

        {!compact && (product.shippingLabel || product.freeGift) && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {product.shippingLabel && (
              <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">
                {product.shippingLabel}
              </span>
            )}
            {product.freeGift && (
              <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-bold uppercase text-rose-500 dark:bg-rose-900/30 dark:text-rose-300">
                Free Gift
              </span>
            )}
          </div>
        )}

        {!compact && status && (
          <p
            className={
              "mt-2 flex items-center gap-1 text-xs " +
              (status === "in-stock"
                ? "text-gray-500 dark:text-gray-400"
                : status === "out-of-stock"
                  ? "text-red-500"
                  : "text-gray-400 dark:text-gray-500")
            }
          >
            {status === "in-stock" && (
              <>
                <CheckCircle2 size={13} className="text-brand-500" />
                In stock
              </>
            )}
            {status === "out-of-stock" && (
              <>
                <XCircle size={13} />
                Out of stock
              </>
            )}
            {status === "pre-order" && (
              <>
                <Clock size={13} />
                Pre-order
              </>
            )}
            {status === "contact" && "Contact"}
          </p>
        )}

        {!compact && product.swatches && (
          <div className="mt-2 flex gap-1.5">
            {product.swatches.map((hex) => (
              <span
                key={hex}
                className="h-4 w-4 rounded-full border border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: hex }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
