function ItemStats(props) {
    return (
        <div className="w-full flex justify-between">
            <p className="capitalize">{props?.item?.stat?.name}</p>
            <p>{props?.item?.base_stat}</p>
        </div>
    )
}

export default ItemStats;