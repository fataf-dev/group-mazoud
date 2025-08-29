import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';

type PaymentMobileProps = {
  amount: number;
  reference: string;
  courseTitle: string;
};

const PaymentMobile: React.FC<PaymentMobileProps> = ({ amount, reference, courseTitle }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Fournisseurs disponibles
  const providers = [
    { id: 'orange', name: 'Orange Money', color: 'bg-orange-500' },
    { id: 'airtel', name: 'Airtel Money', color: 'bg-red-500' },
    { id: 'mpesa', name: 'M-Pesa', color: 'bg-green-500' },
  ];

  // Simule un appel API backend avec délai
  const simulatePaymentApi = () =>
    new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    });

  const handlePayment = async () => {
    if (!selectedProvider) {
      setMessage('Veuillez sélectionner un opérateur.');
      return;
    }
    if (!phoneNumber) {
      setMessage('Veuillez saisir votre numéro de téléphone.');
      return;
    }
    setMessage(null);
    setLoading(true);
    try {
      await simulatePaymentApi();
      setMessage(`Paiement de ${amount.toLocaleString()} FC via ${selectedProvider} effectué avec succès.`);
      setShowForm(false);
      setPhoneNumber('');
      setSelectedProvider('');
    } catch {
      setMessage('Une erreur est survenue lors du paiement.');
    } finally {
      setLoading(false);
    }
  };

  if (!showForm) {
    return (
      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 w-full"
      >
        <Smartphone className="w-4 h-4" />
        <span>Payer {amount.toLocaleString()} FC</span>
      </button>
    );
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
      <h4 className="font-semibold text-gray-800">Paiement Mobile</h4>
      <p className="text-sm text-gray-600">{courseTitle}</p>
      <p className="text-lg font-bold text-green-600">{amount.toLocaleString()} FC</p>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">Choisir l'opérateur</label>
        <div className="grid grid-cols-3 gap-2">
          {providers.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedProvider(p.id)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedProvider === p.id ? `${p.color} text-white border-transparent` : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Ex: 0970123456"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {message && <p className="text-red-600 font-medium">{message}</p>}

      <div className="flex space-x-2">
        <button
          type="button"
          onClick={handlePayment}
          disabled={loading}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Traitement...' : 'Confirmer le paiement'}
        </button>
        <button
          type="button"
          onClick={() => {
            setShowForm(false);
            setMessage(null);
          }}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
          disabled={loading}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default PaymentMobile;
