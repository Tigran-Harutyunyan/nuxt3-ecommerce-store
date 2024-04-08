import { getPath } from "@/lib/utils";

export default defineEventHandler(async (event) => {
    const params = event.context.params;

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