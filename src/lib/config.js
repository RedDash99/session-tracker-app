const SESSION_TYPES = [
  {
    type: 'all',
    label: 'Все',
  },
  {
    type: 'active',
    label: 'Активные',
  },
  {
    type: 'completed',
    label: 'Завершённые',
    nested: [
      {
        type: 'successful',
        label: 'Успешные',
      },
      {
        type: 'failed',
        label: 'Проваленные',
      },
    ],
  },
]

export { SESSION_TYPES }
