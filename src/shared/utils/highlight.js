const escapeHTML = (unsafeString) => {
    return unsafeString
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

const escapeRegExp = (unsafeString) => {
    return unsafeString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const highlightCaseInsesitive = (text, query) => {
    const safeText = escapeHTML(text)
    const queryFormatted = query.trim()

    if (queryFormatted.length === 0) {
        return safeText
    }

    const pattern = new RegExp(escapeRegExp(queryFormatted), 'ig')

    return safeText.replace(pattern, `<mark>$&</mark>`)
}