
export function NoteImgPreview({ info }) {

    return (
        <article className="note img-preview">
        <img src= {info.url} alt= "Note Image"/>
            <h4>{info.title}</h4>
        </article>
    )
}