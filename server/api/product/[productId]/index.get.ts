import { getPath } from "@/lib/utils";

export default defineEventHandler(async (event) => {
    const params = event.context.params;

    if (!params?.productId) {
        return createError({
            status: 400,
            statusMessage: 'Product ID is required'
        });
    }

    try {
        const url = `${getPath()}/site/product/${params.productId}`;
        return $fetch(url);

    } catch (error) {
        return {
            error: error?.message
        }
    }
});