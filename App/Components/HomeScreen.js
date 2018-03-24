import React, { Component} from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import styles from './Styles/HomeScreenStyle'
import lstyles from './Styles/LoginScreenStyle'

export default class HomeScreen extends Component{

	render(){

		return(
			<View style={styles.Container}>
				
				<View style={styles.Carrier}>
				</View>
				
				<View style={styles.Header}>
					<Text style={styles.HeaderText}> Home </Text>
				</View>

				<View style={styles.Body}>

					<View style={styles.ActionSection}>
						<View style={styles.Actions}>

							<View style={styles.ActionImage}>
								<Image 
									style={{height:25,width:25}}
									source={require('../Images/glyphicons-70-gift.png')}
								/>
							</View>

							<View style={styles.ActionTextContainer}>
								<TouchableOpacity>
									<Text style={styles.ActionText}>Order</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.Arrow}>
								<Image 
									source={require('../Images/glyphicons-224-chevron-right.png')}
								/>
							</View>
							
						</View>

						<View style={styles.Actions}>

							<View style={styles.ActionImage}>
								<Image 
									style={{height:25,width:25}}
									source={require('../Images/glyphicons-540-cart-tick.png')}
								/>
							</View>

							<View style={styles.ActionTextContainer}>
								<TouchableOpacity>
									<Text style={styles.ActionText}>Requests</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.Arrow}>
								<Image 
									source={require('../Images/glyphicons-224-chevron-right.png')}
								/>
							</View>


						
						</View>

						<View style={styles.Actions}>

							<View style={styles.ActionImage}>
								<Image 
									style={{height:25,width:25}}
									source={require('../Images/glyphicons-80-signal.png')}
								/>
							</View>

							<View style={styles.ActionTextContainer}>
								<TouchableOpacity>
									<Text style={styles.ActionText}>Analytics</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.Arrow}>
								<Image 
									source={require('../Images/glyphicons-224-chevron-right.png')}
								/>
							</View>
							

						</View>

						<View style={styles.Actions}>

							<View style={styles.ActionImage}>
								<Image 
									style={{height:25,width:25}}
									source={require('../Images/glyphicons-35-old-man.png')}
								/>
							</View>


							<View style={styles.ActionTextContainer}>
								<TouchableOpacity>
									<Text style={styles.ActionText}>My Profile</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.Arrow}>
								<Image 
									source={require('../Images/glyphicons-224-chevron-right.png')}
								/>
							</View>
						

						</View>

						<View style={styles.Actions}>


							<View style={styles.ActionImage}>
								<Image 
									style={{height:25,width:25}}
									source={require('../Images/glyphicons-204-lock.png')}
								/>
							</View>

							<View style={styles.ActionTextContainer}>
								<TouchableOpacity>
									<Text style={styles.ActionText}>Logout</Text>
								</TouchableOpacity>
							</View>
							
							<View style={styles.Arrow}>
								<Image 
									source={require('../Images/glyphicons-224-chevron-right.png')}
								/>
							</View>

						</View>

					</View>

					<View style={styles.FooterSection}>
						<View style={lstyles.CompanyLogoSection}>
							<Image style={lstyles.CompanyLogo}
							  source={require('OSv2/App/Images/CompanyLogo.png')}	
							/>
						</View>
					</View>
				</View>

			</View>
		);
	}
}