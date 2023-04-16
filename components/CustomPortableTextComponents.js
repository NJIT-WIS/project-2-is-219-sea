const CustomPortableTextComponents = {
  block: {
    normal: ({ children }) => {
      return <p className="mb-6 text-base">{children}</p>;
    },
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-1">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-1">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-1">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-1">
        {children}
      </h4>
    ),
  },
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      return (
        <a
          href={value.href}
          target="_blank"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default CustomPortableTextComponents;
