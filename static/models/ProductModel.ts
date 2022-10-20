export interface ImageProductModel {
  createAt: number
  image_id: number
  id: number
  alt: string
  src: string
  variant_id: Array<number>
}

export interface ProductModel {
  id: string
  title: string
  description: string
  type: string
  brand: string
  collection: Array<string>
  category: string
  price: number
  sale: boolean,
  discount: number,
  stock: number,
  new: boolean,
  tags: Array<string>
  variants: Array<Variant>
  images: Array<ImageProductModel>
  enable: boolean
  alias: string
  aliasStore?: string
  nameStore?: string
}

export interface Variant {
    variant_id: number,
    id: number,
    sku: string,
    size: string,
    color: string,
    image_id: number
}
