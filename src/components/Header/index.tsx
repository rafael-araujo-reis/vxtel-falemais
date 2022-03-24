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
    <header className={styles.containerHeader} data-testid="pure_header">
      <nav className={styles.contenteMenu}>
        <a href="#home">
          <img className={styles.logoImage} src="./images/logo.svg" alt="Logo da VxTel" />
        </a>
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

      <div className={styles.contenteSign}>
        <SignButton title={'Acessar conta'} />
      </div>

    </header>
  );
}