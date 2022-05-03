export function serializeSchema(data = {}) {
    return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}