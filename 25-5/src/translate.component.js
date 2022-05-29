import React, {useEffect, useContext, useState} from 'react';
import InfoForm from './form.component';

const Forms = () => {
	return (
		<div className="forms">
			<InfoForm LangContext="fi" />
			<InfoForm LangContext="en" />

		</div>
	)
};

export default Forms;