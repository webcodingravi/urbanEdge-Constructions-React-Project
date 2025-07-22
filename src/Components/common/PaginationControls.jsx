function PaginationControls({ pagination, onPageChange }) {
    if (!pagination.last_page)
        return null;
    const { current_page, last_page, links, from, to, total } = pagination;

    if (last_page > 1)
        return (
            <nav className="flex flex-col items-center space-y-2 mt-8">
                <ul className="inline-flex items-center -space-x-px">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <button className={`cursor-pointer p-2 ${link.active ? "bg-indigo-600" : "bg-indigo-500"} text-white`} onClick={() => link.url && onPageChange(link.url === '...' ? current_page : parseInt(new URL(link.url).searchParams.get('page')))} disabled={!link.url}>
                                <span dangerouslySetInnerHTML={{ __html: link.label }} />
                            </button>
                        </li>
                    ))
                    }

                </ul >
                <div className="text-sm text-gray-600">Showing <strong>{from}</strong>-<strong>{to}</strong> of <strong>{total}</strong> entries</div>
            </nav >
        )
}

export default PaginationControls;