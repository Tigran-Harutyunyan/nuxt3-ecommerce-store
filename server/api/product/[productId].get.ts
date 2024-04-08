import { getPath } from "@/lib/utils";

export default defineEventHandler(async (event) => {
    const { auth } = event.context;
    const params = event.context.params;

    if (!auth.userId) {
        setResponseStatus(event, 403)
        return ''
    }

    if (!params?.productId) {
        return createError({
            status: 400,
            statusMessage: 'Product ID is required'
        });
    }

    try {
        const url = `${getPath()}/site/products/${params.productId}`;
        return $fetch(url);

    } catch (error) {
        return {
            error: error?.message
        }
    }
});