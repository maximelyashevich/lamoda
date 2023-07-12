import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces'
import instance from '../../axios'


export const fetchAllProducts = createAsyncThunk<IProduct[]>(
    'products/fetchAllProducts',
    async () => {
        const response = await instance.get('/products')
        return response.data.products
    }
)

export const fetchProduct = createAsyncThunk<IProduct>(
    'products/fetchProduct',
    async (id) => {
        const response = await instance.get(`/products/${id}`)
        return response.data.products
    }
)

export const fetchAllCategories = createAsyncThunk<string[]>(
    'products/fetchAllCategories',
    async () => {
        const response = await instance.get('/products/categories')
        return response.data
    }
)

export const fetchProductsByCategory = createAsyncThunk<IProduct[], string>(
    'products/fetchProductsByCategory',
    async (cat) => {
        const response = await instance.get(`/products/category/${cat}`)
        return response.data.products
    }
)

export const fetchSearch = createAsyncThunk<IProduct[], string>(
    'produstc/fetchSearch',
    async (q) => {
        const response = await instance.get(`/products/search?q=${q}`)
        return response.data.products
    }
)

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}


type TState = {
    products: IProduct[],
    categories: string[],
    filter: {
        q: string
    },
    loading: boolean,
    error: string | null
}

const initialState: TState = {
    products: [],
    categories: [],
    filter: {
        q: ''
    },
    loading: false,
    error: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // order by price
        orderByPriceTop(state) {
            state.products.sort((a, b) => a.price > b.price ? 1 : -1)
        },
        orderByPriceBottom(state) {
            state.products.sort((a, b) => a.price < b.price ? 1 : -1)
        },
        // order by popular
        orderByPopularBottom(state) {
            state.products.sort((a, b) => a.rating < b.rating ? 1 : -1)
        },
        // order by discount
        orderByDiscountBottom(state) {
            state.products.sort((a, b) => a.discountPercentage < b.discountPercentage ? 1 : -1)
        },
        // search q param
        setQFilter(state, action) {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // fetch all products
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            // fetch product by id
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.products.length = 0
                state.products.push(action.payload)
                state.loading = false
            })
            // fetch all categories
            .addCase(fetchAllCategories.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                state.categories = action.payload
                state.loading = false
            })
            // fetch products by category
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.products.length = 0
                state.products = action.payload
                state.loading = false
            })
             // fetch products by search
             .addCase(fetchSearch.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export const { orderByPriceBottom, orderByPriceTop, orderByDiscountBottom, orderByPopularBottom, setQFilter } = productsSlice.actions
export default productsSlice.reducer