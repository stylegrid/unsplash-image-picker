import React from 'react';
interface Props {
    query: string;
    setQuery: (query: string) => void;
    onSearch: (query: string) => void;
}
declare function SearchBar({ setQuery, query, onSearch }: Props): React.JSX.Element;
export default SearchBar;
