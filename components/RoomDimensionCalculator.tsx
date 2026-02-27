import { useState } from 'react';

interface RoomDimensionCalculatorProps {
    onDimensionsChange: (summary: string) => void;
}

const inputStyle: React.CSSProperties = {
    background: 'rgba(167, 139, 250, 0.05)',
    border: '1px solid rgba(167, 139, 250, 0.15)',
    borderRadius: '8px',
    color: '#f1eeff',
    padding: '8px 10px',
    width: '100%',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box',
};

const RoomDimensionCalculator = ({ onDimensionsChange }: RoomDimensionCalculatorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [unit, setUnit] = useState<'ft' | 'm'>('ft');
    const [length, setLength] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(9);

    const floorArea = length * width;
    const perimeter = 2 * (length + width);
    const wallArea = perimeter * height;
    const flooringNeeded = floorArea * 1.1;

    const canAdd = length > 0 && width > 0;

    const handleAddToPrompt = () => {
        const summary = `Room dimensions: ${length}${unit} × ${width}${unit}, ceiling height ${height}${unit}. Floor area: ${floorArea.toFixed(1)}${unit}².`;
        onDimensionsChange(summary);
    };

    const fields = [
        { label: `Length (${unit})`, value: length, setter: setLength },
        { label: `Width (${unit})`, value: width, setter: setWidth },
        { label: `Ceiling (${unit})`, value: height, setter: setHeight },
    ] as const;

    const results = [
        { label: 'Floor Area', value: `${floorArea.toFixed(1)} ${unit}²` },
        { label: 'Wall Area', value: `${wallArea.toFixed(1)} ${unit}²` },
        { label: 'Flooring Needed (+10%)', value: `${flooringNeeded.toFixed(1)} ${unit}²` },
        { label: 'Perimeter', value: `${perimeter.toFixed(1)} ${unit}` },
    ];

    return (
        <div style={{ marginBottom: '10px' }}>
            {/* Spinner hide — scoped to this component's inputs */}
            <style>{`
                .rdcalc input[type=number]::-webkit-inner-spin-button,
                .rdcalc input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
                .rdcalc input[type=number] { -moz-appearance: textfield; }
            `}</style>

            <button
                onClick={() => setIsOpen((o) => !o)}
                style={{
                    background: 'rgba(167, 139, 250, 0.08)',
                    border: '1px solid rgba(167, 139, 250, 0.2)',
                    borderRadius: '10px',
                    color: '#c4b5fd',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '10px 16px',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <span>📐 Room Calculator</span>
                <span style={{ fontSize: '10px', color: '#6b5fa0' }}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div
                    className="rdcalc"
                    style={{
                        background: '#1e1830',
                        border: '1px solid rgba(167, 139, 250, 0.12)',
                        borderRadius: '10px',
                        padding: '16px',
                        marginTop: '8px',
                    }}
                >
                    {/* Unit toggle */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                        {(['ft', 'm'] as const).map((u) => (
                            <button
                                key={u}
                                onClick={() => setUnit(u)}
                                style={{
                                    flex: 1,
                                    padding: '7px',
                                    borderRadius: '8px',
                                    border:
                                        unit === u
                                            ? '1px solid rgba(167, 139, 250, 0.6)'
                                            : '1px solid rgba(167, 139, 250, 0.15)',
                                    background:
                                        unit === u
                                            ? 'rgba(167, 139, 250, 0.15)'
                                            : 'rgba(167, 139, 250, 0.05)',
                                    color: unit === u ? '#a78bfa' : '#6b5fa0',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                }}
                            >
                                {u === 'ft' ? 'Imperial (ft)' : 'Metric (m)'}
                            </button>
                        ))}
                    </div>

                    {/* Dimension inputs */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '10px',
                            marginBottom: '14px',
                        }}
                    >
                        {fields.map(({ label, value, setter }) => (
                            <div key={label}>
                                <label
                                    style={{
                                        color: '#6b5fa0',
                                        fontSize: '10px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        display: 'block',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {label}
                                </label>
                                <input
                                    type="number"
                                    value={value || ''}
                                    onChange={(e) => setter(parseFloat(e.target.value) || 0)}
                                    style={inputStyle}
                                    min={0}
                                    step={0.1}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Calculated results */}
                    <div
                        style={{
                            borderTop: '1px solid rgba(167, 139, 250, 0.1)',
                            paddingTop: '12px',
                            marginBottom: '14px',
                        }}
                    >
                        {results.map(({ label, value }) => (
                            <div
                                key={label}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingBottom: '8px',
                                }}
                            >
                                <span style={{ color: '#6b5fa0', fontSize: '11px' }}>{label}</span>
                                <span style={{ color: '#c4b5fd', fontSize: '12px', fontWeight: 600 }}>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Add to prompt */}
                    <button
                        onClick={handleAddToPrompt}
                        disabled={!canAdd}
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 700,
                            padding: '10px 16px',
                            cursor: canAdd ? 'pointer' : 'not-allowed',
                            width: '100%',
                            opacity: canAdd ? 1 : 0.5,
                            transition: 'opacity 0.2s',
                        }}
                    >
                        ✦ Add dimensions to AI prompt
                    </button>
                </div>
            )}
        </div>
    );
};

export default RoomDimensionCalculator;
