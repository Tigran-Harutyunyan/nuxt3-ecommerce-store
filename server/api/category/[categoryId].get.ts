import { getPath } from "@/lib/utils";

export default defineEventHandler(async (event) => {
    const { auth } = event.context;
    const params = event.context.params;

    if (!auth.userId) {
        setResponseStatus(event, 403)
        return ''
    }

    let url = `${getPath()}site/category`;


    if (params?.categoryId) {
        url += `/${params.categoryId}`
    }

    try {
        return $fetch(url)

    } catch (error) {
        return {
            error: error?.message
        }
    }
});