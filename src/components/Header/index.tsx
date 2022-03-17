import SignButton from '../SignButton';
import styles from './styles.module.scss';

type ItemMenu = {
  id: number;
  title: string;
  url: string;
};

interface HeaderProps {
  itemsMenu: ItemMenu[];
}

export default function Header({ itemsMenu }: HeaderProps) {
  return (
    <header className={styles.containerHeader}>
      <nav className={styles.contentMenu}>
        <img className={styles.logoImage} src="./images/logo.svg" alt="Logo da VxTel" />
        <ul>
          {
            itemsMenu.map(item => {
              return (
                <a key={item.id} href={item.url}>
                  <li className={styles.itemMenu}>
                    {item.title}
                  </li>

                </a>
              );
            })
          }
        </ul>
      </nav>

      <div className={styles.contentSign}>
        <SignButton title={'Acessar conta'} />
      </div>

    </header>
  );
}