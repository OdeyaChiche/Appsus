
export function NoteImgPreview({ info, noteId }) {

    return (
        <article className="note img-preview">
        <img src= {info.url} alt= "Note Image"/>
        <h4>{info.title}</h4>
        </article>
    )
}