import { getPath } from "@/lib/utils";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const url = `${getPath()}site/checkout`;
        return $fetch(url, {
            method: 'post',
            body
        });

    } catch (error) {
        return {
            error: error?.message
        }
    }
});