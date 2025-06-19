import clsx from 'clsx';
// Styles are imported globally

const BrandName = () => {

  const mockData = {
    brandName: '## Brand Name **'
  };

  return (
    <span className={clsx('enj-BrandName')}>{mockData.brandName}</span>
  );
};

export default BrandName;