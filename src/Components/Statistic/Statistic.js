export default function Statistics({stats, title}) {
    return(
        <section class="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul class="stat-list">
{stats.map((statItem )=> (
    <li key={statItem.id} class="item">
                <span class="label">{statItem.label}</span>
                <span class="percentage">{statItem.percentage}</span>
            </li>))}
            </ul>
    </section>)
}
        
                