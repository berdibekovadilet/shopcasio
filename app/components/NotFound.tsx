import {Button} from './Button';
import {FeaturedSection} from './FeaturedSection';
import {PageHeader, Text} from './Text';

export function NotFound({type = 'page'}: {type?: string}) {
  const heading = `Мы не нашли ${type}`;
  const description = `Мы не смогли найти ${type}, которую вы ищете. Попробуйте проверить URL или вернуться на главную страницу.`;

  return (
    <>
      <PageHeader heading={heading}>
        <Text width="narrow" as="p">
          {description}
        </Text>
        <Button width="auto" variant="secondary" to={'/'}>
          На главную страницу
        </Button>
      </PageHeader>
      <FeaturedSection />
    </>
  );
}
