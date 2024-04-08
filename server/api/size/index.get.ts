import { getPath } from "@/lib/utils";

export default defineEventHandler(async (event) => {

    try {
        const url = `${getPath()}/site/size?`;
        return $fetch(url)

    } catch (error) {
        return {
            error: error?.message
        }
    }
});