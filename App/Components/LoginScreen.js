import React, { Component } from 'react';
import {Text,View,Image,TextInput,Button, TouchableOpacity} from 'react-native';
import styles from './Styles/LoginScreenStyle';

export default class LoginScreen extends Component{


	constructor(props){
		super(props)
		this.state = {
			count: 0
		}
	}


	onPress = () => {

		this.setState({
			count:this.state.count+1
		})

		console.log(this.state.count)
	}

	onEmailChange(text){

		
	}

	render(){

		return(

			<View style={styles.Container}>
				
				<View style={styles.UpperSection}>
					
					<View style={styles.CompanyLogoSection}>
						<Image style={styles.CompanyLogo}
						  source={require('OSv2/App/Images/CompanyLogo.png')}	
						/>
					</View>

					<View style={styles.AppLogoSection}>
						<Image style={styles.AppLogo}
						source={require('OSv2/App/Images/AppLogo.png')} 
						/>
					</View>

					<View style={styles.AppNameSection}>
						<Text style={styles.AppName}> NxJ Logistics </Text>
					</View>

				</View>

				<View style={styles.LowerSection}>
						
					<View style={styles.UsernameSection}>
						<TextInput style={styles.TextInput}
							label="username"
							placeholder="Username..."
							onChangeText = {this.onEmailChange.bind(this)} 
						/>

					</View>

					<View style={styles.PasswordSection}>
						<TextInput style={styles.TextInput}
							secureTextEntry
							label="password"
							placeholder="Password..."
						/>
					</View>

					<View style={styles.LoginButtonSection}>
						<TouchableOpacity 
							onPress = {this.onPress}
							style={styles.LoginButtonStyle}>
							<Text style={styles.ButtonTextStyle}> Login </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
