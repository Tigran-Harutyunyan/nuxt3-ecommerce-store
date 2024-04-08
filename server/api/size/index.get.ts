import { getPath } from "@/lib/utils";

export default defineEventHandler(async (event) => {
    const { auth } = event.context;

    if (!auth.userId) {
        setResponseStatus(event, 403)
        return ''
    }

    try {
        const url = `${getPath()}/site/size?`;
        return $fetch(url)

    } catch (error) {
        return {
            error: error?.message
        }
    }
});