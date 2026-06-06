import { useState } from 'react';
import './App.css';

const TONE_OPTIONS = [
    { value: 'formal', label: '👔 Formal', description: 'Profissional e corporativo' },
    { value: 'criativo', label: '🎨 Criativo', description: 'Inovador e original' },
    { value: 'inspirador', label: '✨ Inspirador', description: 'Motivacional e envolvente' },
    { value: 'tecnico', label: '💻 Técnico', description: 'Objetivo e especializado' }
];

const FOCUS_OPTIONS = [
    { value: 'lideranca', label: 'Liderança' },
    { value: 'inovacao', label: 'Inovação' },
    { value: 'resultados', label: 'Resultados' },
    { value: 'colaboracao', label: 'Colaboração' }
];

const MAX_EXPERIENCIA_LENGTH = 1000;
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/generate-bio';

function App() {
    const [formData, setFormData] = useState({
        profissao: '',
        experiencia: '',
        tom: 'formal',
        foco: 'resultados',
        habilidades: ''
    });

    const [bio, setBio] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isCopied, setIsCopied] = useState(false);

    const handleInputChange = (field, value) => {
        if (field === 'experiencia' && value.length > MAX_EXPERIENCIA_LENGTH) {
            return;
        }
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const buildPrompt = () => {
        const { profissao, experiencia, tom, foco, habilidades } = formData;

        return `Crie uma bio profissional para LinkedIn.
    
Profissão: ${profissao}
Experiência: ${experiencia}
Tom desejado: ${tom}
Foco principal: ${foco}
${habilidades ? `Habilidades principais: ${habilidades}` : ''}

A bio deve ser concisa, impactante e destacar as principais qualidades do profissional.`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setBio('');
        setIsCopied(false);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: buildPrompt() }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Erro HTTP ${response.status}`);
            }

            const data = await response.json();
            setBio(data.bio);
        } catch (err) {
            setError(err.message);
            console.error('Erro ao gerar bio:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = async () => {
        if (!bio) return;

        try {
            await navigator.clipboard.writeText(bio);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Falha ao copiar:', err);
            setError('Não foi possível copiar o texto');
        }
    };

    const handleReset = () => {
        setFormData({
            profissao: '',
            experiencia: '',
            tom: 'formal',
            foco: 'resultados',
            habilidades: ''
        });
        setBio('');
        setError(null);
    };

    return (
        <div className="container">
            <div className="content">
                <header className="header">
                    <div className="icon-bounce">💼</div>
                    <h1 className="title">Gerador de Bio LinkedIn</h1>
                    <p className="subtitle">
                        Crie uma bio profissional impactante em segundos
                    </p>
                </header>

                <div className="card">
                    <div className="form-container">
                        <div className="form-group">
                            <label className="label">Profissão *</label>
                            <input
                                type="text"
                                value={formData.profissao}
                                onChange={(e) => handleInputChange('profissao', e.target.value)}
                                placeholder="Ex: Desenvolvedor Full Stack"
                                className="input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="label">Tom da Bio *</label>
                            <div className="tone-grid">
                                {TONE_OPTIONS.map((tone) => (
                                    <button
                                        key={tone.value}
                                        onClick={() => handleInputChange('tom', tone.value)}
                                        className={`tone-button ${formData.tom === tone.value ? 'tone-button-active' : ''
                                            }`}
                                    >
                                        <span className="tone-label">{tone.label}</span>
                                        <span className="tone-desc">{tone.description}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-with-count">
                                <span>Experiência *</span>
                                <span className="char-count">
                                    {formData.experiencia.length} / {MAX_EXPERIENCIA_LENGTH}
                                </span>
                            </label>
                            <textarea
                                value={formData.experiencia}
                                onChange={(e) => handleInputChange('experiencia', e.target.value)}
                                placeholder="Descreva sua experiência, projetos principais, conquistas..."
                                rows="4"
                                className="textarea"
                            />
                        </div>

                        <div className="form-group">
                            <label className="label">Foco Principal *</label>
                            <select
                                value={formData.foco}
                                onChange={(e) => handleInputChange('foco', e.target.value)}
                                className="select"
                            >
                                {FOCUS_OPTIONS.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="label">Habilidades Principais (opcional)</label>
                            <input
                                type="text"
                                value={formData.habilidades}
                                onChange={(e) => handleInputChange('habilidades', e.target.value)}
                                placeholder="Ex: React, Node.js, Liderança de Equipes"
                                className="input"
                            />
                        </div>

                        <div className="button-group">
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className={`button button-primary ${isLoading ? 'button-disabled' : ''}`}
                            >
                                {isLoading ? (
                                    <span className="loading-text">
                                        <span className="spinner">⏳</span>
                                        Gerando...
                                    </span>
                                ) : (
                                    '✨ Gerar Bio'
                                )}
                            </button>

                            <button
                                onClick={handleReset}
                                className="button button-secondary"
                            >
                                🔄 Limpar
                            </button>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="error-box">
                        <span className="error-icon">⚠️</span>
                        <span className="error-text">{error}</span>
                    </div>
                )}

                {bio && (
                    <div className="card">
                        <div className="result-header">
                            <h2 className="result-title">✅ Sua Nova Bio</h2>
                            <button
                                onClick={handleCopy}
                                disabled={isCopied}
                                className={`button button-copy ${isCopied ? 'button-copied' : ''}`}
                            >
                                {isCopied ? '✓ Copiado!' : '📋 Copiar'}
                            </button>
                        </div>
                        <div className="bio-container">
                            <p className="bio-text">{bio}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;