import { getPath } from "@/lib/utils";
import qs from "query-string";

export default defineEventHandler(async (event) => {

    const searchParams = await getQuery(event);

    const url = qs.stringifyUrl({
        url: `${getPath()}site/products`,
        query: {
            colorId: searchParams.colorId || undefined,
            sizeId: searchParams.sizeId || undefined,
            categoryId: searchParams.categoryId || undefined,
            isFeatured: searchParams.isFeatured || undefined,
        },
    });

    try {
        return await $fetch(url);
    } catch (error) {
        return {
            error: error?.message
        }
    }
});