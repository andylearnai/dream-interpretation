'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Textarea, Button, Card } from '@nextui-org/react';
import { 
  FiSend, 
  FiEye,     
  FiKey,    
  FiHeart,  
  FiStar,   
  FiCompass 
} from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

const icons = [FiEye, FiKey, FiHeart, FiStar, FiCompass];
let iconCounter = 0;

const getNextIcon = () => {
  const icon = icons[iconCounter % icons.length];
  iconCounter++;
  return icon;
};

const CustomHeading: Components['h2'] = ({ children, ...props }) => {
  const IconComponent = getNextIcon();
  
  return (
    <div className="flex items-center gap-2 text-xl font-bold text-purple-600 mb-4 mt-6">
      <IconComponent className="w-6 h-6" />
      <span>{children}</span>
    </div>
  );
};

const CustomComponents: Components = {
  h2: CustomHeading,
  h3: CustomHeading,
  ul: ({ children, ...props }) => (
    <ul className="list-none space-y-2 ml-6" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal space-y-2 ml-6" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="flex items-start" {...props}>
      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3" />
      <span>{children}</span>
    </li>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 text-gray-700 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-purple-700" {...props}>
      {children}
    </strong>
  ),
};

export default function DreamInterpreter({ locale }: { locale: string }) {
  const t = useTranslations('DreamInterpreter');
  const [dream, setDream] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!dream.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dream, locale }),
      });

      const data = await response.json();
      
      // 重置图标计数器
      iconCounter = 0;
      
      // 提取<dream_interpretation>标签中的内容
      const content = data.interpretation;
      const match = content.match(/<dream_interpretation>([\s\S]*?)<\/dream_interpretation>/);
      const interpretationText = match ? match[1].trim() : content.trim();
      
      setInterpretation(interpretationText);
    } catch (error) {
      console.error('Error:', error);
      setInterpretation(t('error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('subtitle')}
        </p>
      </div>

      <Card className="p-6 mb-8 md:max-w-2xl mx-auto">
        <Textarea
          placeholder={t('placeholder')}
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          minRows={4}
          maxRows={8}
          className="mb-4"
        />
        <div className="space-y-2">
          <Button
            color="primary"
            endContent={<FiSend />}
            onClick={handleSubmit}
            isLoading={isLoading}
            className="w-full"
          >
            {t('submit')}
          </Button>
          <p className="text-sm text-gray-500 text-center">
            {t('tip')}
          </p>
        </div>
      </Card>

      {interpretation && (
        <Card className="p-6 md:max-w-2xl mx-auto">
          <div className="prose prose-purple max-w-none">
            <ReactMarkdown components={CustomComponents}>
              {interpretation}
            </ReactMarkdown>
          </div>
        </Card>
      )}
    </div>
  );
}