import toMovie from "@/plugins/axios";

export const getMovieById = async (id: Number) => {
    try {
        const res = await toMovie.get("films/" + id);
        return res
    } catch (e) {
        console.log(e);
    }
}