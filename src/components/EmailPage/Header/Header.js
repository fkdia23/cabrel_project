import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Header.module.css';
import AccountControls from './AccountControls/AccountControls';
import EditImageModal from './EditImageModal/EditImageModal';
import GmailLogo from './images/gmail-logo.png';
import { IconButton, Avatar, Switch, FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import { AccountStateAction } from '../../../redux/actions/emailActions';

export default function Header({ toggleShowSidebar }) {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch()
  
  const [showProfile, setShowProfile] = useState(false);
  const [showEditImage, setShowEditImage] = useState(false);
  const [checked, setChecked] = useState(user.Accountactivate);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    const values ={
      state : event.target.checked,
      user,
    }
    if(event.target.checked){
      dispatch(AccountStateAction(values));
      localStorage.setItem('account', 'activate')
    }else{
      dispatch(AccountStateAction(values));
      localStorage.setItem('account','deactivate')
    }
  }

  const toggleShowProfile = () => setShowProfile(!showProfile);
  const toggleShowEditImage = () => setShowEditImage(!showEditImage);

  return (
    <header className={styles.container}>
      <div className={styles.side}>
        <IconButton onClick={toggleShowSidebar}>
          <MenuIcon />
        </IconButton>
        <img src={GmailLogo} alt='gmail logo' />
      </div>

      <div className={styles.middle}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type='text' placeholder='Search mail' />
      </div>

      <div className={styles.side + ' ' + styles.relative}>

      <FormControl component="fieldset" variant="standard">
      <FormGroup>
      <FormControlLabel
          control={
            <Switch checked={checked} onChange={handleChange} name="gilad" />
          }
          label={checked ? "account activate" : "account deativate"}
        />

      </FormGroup>
      </FormControl>

        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
        <IconButton onClick={toggleShowProfile}>
          <Avatar src={user.profilePicture} />
        </IconButton>

        {showProfile && (
          <AccountControls
            user={user}
            toggleShowProfile={toggleShowProfile}
            toggleShowEditImage={toggleShowEditImage}
          />
        )}
        {showEditImage && <EditImageModal toggleShowEditImage={toggleShowEditImage} />}
      </div>
    </header>
  );
}
