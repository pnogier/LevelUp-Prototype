import { useTranslation } from 'react-i18next';

const selectStatus = () => {
  const { t } = useTranslation('status');

  const data = [
    { label: t('instructor') },
    { label: t('student') },
    { label: t('pollster') },
    { label: t('employee') },
    { label: t('probe') },
  ].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));

  return data
}

export default selectStatus
