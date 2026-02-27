export interface StylePreset {
    id: string;
    label: string;
    icon: string;
    keywords: string;
}

export const STYLE_PRESETS: StylePreset[] = [
    {
        id: 'modern',
        label: 'Modern',
        icon: '🏙️',
        keywords: 'modern, sleek, contemporary, clean lines, open space, neutral tones, minimalist furniture',
    },
    {
        id: 'minimalist',
        label: 'Minimalist',
        icon: '◻️',
        keywords: 'minimalist, zen, bare essentials, white space, simple forms, muted colors, uncluttered',
    },
    {
        id: 'industrial',
        label: 'Industrial',
        icon: '🏭',
        keywords: 'industrial, exposed brick, concrete, metal accents, raw materials, pipes, loft-style, dark tones',
    },
    {
        id: 'scandinavian',
        label: 'Scandinavian',
        icon: '🌲',
        keywords: 'Scandinavian, hygge, natural wood, warm textures, cozy, light colors, functional design',
    },
    {
        id: 'japandi',
        label: 'Japandi',
        icon: '🎍',
        keywords: 'Japandi, wabi-sabi, Japanese minimalism, Scandinavian warmth, neutral earthy tones, craftsmanship',
    },
    {
        id: 'luxury',
        label: 'Luxury',
        icon: '👑',
        keywords: 'luxury, opulent, gold accents, velvet, marble, high-end materials, dramatic lighting, rich jewel tones',
    },
];

interface StylePresetsProps {
    onStyleSelect: (style: StylePreset | null) => void;
    selectedStyleId: string | null;
}

const StylePresets = ({ onStyleSelect, selectedStyleId }: StylePresetsProps) => {
    const selectedStyle = STYLE_PRESETS.find((s) => s.id === selectedStyleId) ?? null;

    return (
        <div
            style={{
                background: '#1e1830',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '10px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                }}
            >
                <p
                    style={{
                        color: '#c4b5fd',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        margin: 0,
                    }}
                >
                    Style Presets
                </p>
                {selectedStyleId && (
                    <button
                        onClick={() => onStyleSelect(null)}
                        style={{
                            background: 'rgba(167, 139, 250, 0.1)',
                            border: '1px solid rgba(167, 139, 250, 0.2)',
                            color: '#a78bfa',
                            fontSize: '11px',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        Clear
                    </button>
                )}
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                }}
            >
                {STYLE_PRESETS.map((style) => {
                    const isSelected = selectedStyleId === style.id;
                    return (
                        <button
                            key={style.id}
                            onClick={() => onStyleSelect(isSelected ? null : style)}
                            style={{
                                background: isSelected
                                    ? 'rgba(167, 139, 250, 0.15)'
                                    : 'rgba(167, 139, 250, 0.05)',
                                border: isSelected
                                    ? '1px solid rgba(167, 139, 250, 0.6)'
                                    : '1px solid rgba(167, 139, 250, 0.12)',
                                borderRadius: '10px',
                                padding: '10px 8px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '6px',
                                transition: 'all 0.2s ease',
                                boxShadow: isSelected
                                    ? '0 0 12px rgba(167, 139, 250, 0.3)'
                                    : 'none',
                            }}
                        >
                            <span style={{ fontSize: '20px' }}>{style.icon}</span>
                            <span
                                style={{
                                    color: isSelected ? '#a78bfa' : '#c4b5fd',
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                }}
                            >
                                {style.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {selectedStyle && (
                <p
                    style={{
                        color: '#6b5fa0',
                        fontSize: '10px',
                        fontStyle: 'italic',
                        margin: '10px 0 0 0',
                    }}
                >
                    ✦ AI prompt enhanced with {selectedStyle.label} keywords
                </p>
            )}
        </div>
    );
};

export default StylePresets;
